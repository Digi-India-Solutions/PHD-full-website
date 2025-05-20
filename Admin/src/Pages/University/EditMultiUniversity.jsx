import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate, Link } from "react-router-dom";
import JoditEditor from "jodit-react";

const EditMultiUniversity = () => {
  const [universityZone, setUniversityZone] = useState("");
  const [universities, setUniversities] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [allUniversityZones, setAllUniversityZones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUniversityZones = async () => {
      try {
        const response = await axios.get("https://api.iirhe.org/api/all-universities");
        setAllUniversityZones(response.data.data);
      } catch (error) {
        console.error("Error fetching UniversityZones", error);
      }
    };

    const fetchUniversityData = async () => {
      try {
        const response = await axios.get(`https://api.iirhe.org/api/get-multi-universities/${id}`);
        const data = response.data;
        setUniversityZone(data.UniversityZone._id);
        setUniversities(data.Universities); // Assuming rich text HTML string
        setExternalLink(data.Link || "");
      } catch (error) {
        console.error("Error fetching University data", error);
      }
    };

    fetchUniversityZones();
    fetchUniversityData();
  }, [id]);

  const handleEditorChange = (content) => {
    setUniversities(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!universityZone || !universities) {
      Swal.fire("Error", "Please select a University Zone and provide university details", "error");
      return;
    }

    setIsLoading(true);

    try {
      await axios.put(`https://api.iirhe.org/api/update-multi-universities/${id}`, {
        UniversityZone: universityZone,
        Universities: universities,
        Link: externalLink,
      });

      Swal.fire("Success", "Universities updated successfully", "success");
      navigate("/all-university");
    } catch (error) {
      Swal.fire("Error", "Failed to update universities", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bread">
        <div className="head">
          <h4>Edit Multiple Universities</h4>
        </div>
        <div className="links">
          <Link to="/all-university" className="add-new">
            Back <i className="fa-regular fa-circle-left"></i>
          </Link>
        </div>
      </div>

      <div className="d-form">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="universityZone" className="form-label">
              University Zone
            </label>
            <select
              id="universityZone"
              className="form-control"
              value={universityZone}
              onChange={(e) => setUniversityZone(e.target.value)}
              required
            >
              <option value="">Select University Zone</option>
              {allUniversityZones.map((zone) => (
                <option key={zone._id} value={zone._id}>
                  {zone.UniversityZone}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="Universities" className="form-label">
              University Details <span className="text-danger">*</span>
            </label>
            <JoditEditor value={universities} onChange={handleEditorChange} required />
          </div>

          <div className="col-12">
            <label htmlFor="Link" className="form-label">
              Add Link <span className="text-danger">*</span>
            </label>
            <textarea
              name="link"
              className="form-control"
              id="CourseOverView"
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              placeholder="Add Link"
              required
            />
          </div>

          <div className="col-12 text-center">
            <button
              type="submit"
              className={`${isLoading ? "not-allowed" : "allowed"}`}
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditMultiUniversity;
