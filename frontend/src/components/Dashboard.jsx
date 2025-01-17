import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { FaHeart, FaComment } from "react-icons/fa";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState();
  const [postdata, setPostdata] = useState([]);
  console.log(postdata);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allpost");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLikes = async (value) => {
    const { id, likes } = value;
    console.log(value);
    try {
      const add = likes + 1;
      console.log(add);
      await axios.put(`http://localhost:8000/addlike/${id}`, { add });
      fetchData();
      setData((predata) =>
        predata.map((val) => (val.id === id ? { ...val, likes: add } : val))
      );
      console.log("Likes added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const handleComments = async (value) => {
    const { id } = value;
    try {
      const response = await axios.get(
        `http://localhost:8000/getuserpost/${id}`
      );
      setPostdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendComments = async (e) => {
    e.preventDefault();
    const tokendata = JSON.parse(sessionStorage.getItem("token"));
    const commentData = {
      username: tokendata.username,
      comment: comment,
    };
    const id = postdata[0].id;
    try {
      await axios.put(`http://localhost:8000/addcomment/${id}`, {
        commentData,
      });
      setPostdata((prev) =>
        prev.map((post) =>
          post.id === id
            ? {
                ...post,
                comments: [
                  ...(post.comments || []),
                  JSON.stringify(commentData),
                ],
              }
            : post
        )
      );
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="mt-4">
          <div className="story-container">
            {data.map((value, id) => (
              <div key={id} className="story">
                <div className="story-avatar">
                  <img
                    src={`http://localhost:8000${value.image}`}
                    alt={value.userName}
                  />
                </div>
                <small>
                  <p>@{value.userName}</p>
                </small>
              </div>
            ))}
          </div>
        </div>
        <div className="row g-3 p-2">
          {data.map((value, id) => (
            <div className="col-md-4 col-sm-6 " key={id}>
              <div className="card  shadow-sm bg-light rounded border">
                <div className="d-flex justify-content-between align-items-center p-3 gap-4 ">
                  <h6 className="m-0 fw-bold">@{value.userName}</h6>
                  <button className="btn border-0 ">
                    {" "}
                    <h6 className="m-0">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </h6>
                  </button>
                </div>
                <img
                  src={`http://localhost:8000${value.image}`}
                  className="card-img-top"
                  alt={value.content || "Post Image"}
                  style={{
                    objectFit: "cover",
                    height: "400px",
                    padding: "10px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">{value.content}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="btn text-danger"
                        style={{ outline: "none", boxShadow: "none" }}
                        onClick={() => handleLikes(value)}
                      >
                        <FaHeart /> <span className="mt-1">{value.likes}</span>
                      </button>
                      <button
                        type="button"
                        class="btn text-primary"
                        style={{ outline: "none", boxShadow: "none" }}
                        onClick={() => handleComments(value)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        <FaComment />{" "}
                        <span className="mt-1">
                          {value.comments?.length || 0}
                        </span>
                      </button>
                    </div>
                    <button
                      className="btn text-dark"
                      style={{ outline: "none", boxShadow: "none" }}
                    >
                      <i class="fa-solid fa-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 className="modal-title fw-bold" id="exampleModalLabel">
                Comments
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {postdata.map((value, index) => (
                <div
                  key={index}
                  className="p-3 rounded shadow-sm mb-3"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-2">
                      <img
                        src={`http://localhost:8000${value.image}`}
                        alt="User Avatar"
                        className="rounded-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 text-primary">@{value.userName}</h6>
                    </div>
                  </div>
                  <p className="text-secondary">{value.content}</p>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div>
                      <span className="text-danger me-3">
                        <FaHeart className="me-1" /> {value.likes}
                      </span>
                      <span className="text-primary">
                        <FaComment className="me-1" />{" "}
                        {value.comments?.length || 0} Comments
                      </span>
                    </div>
                  </div>

                  {value.comments && value.comments.length > 0 && (
                    <div className="mt-3 ps-4">
                      {value.comments.map((commentData, commentIndex) => {
                        const comment = JSON.parse(commentData);
                        return (
                          <div
                            key={commentIndex}
                            className="d-flex align-items-start mb-2"
                          >
                            <div>
                              <h6 className="mb-0 text-primary small">
                                @{comment.username}
                              </h6>
                              <p className="text-secondary mb-0 small">
                                {comment.comment}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <form
                className="d-flex align-items-center w-100"
                onSubmit={handleSendComments}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{ borderRadius: "20px" }}
                />
                <button
                  type="submit"
                  className="btn btn-primary ms-2"
                  style={{ borderRadius: "50%" }}
                >
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
