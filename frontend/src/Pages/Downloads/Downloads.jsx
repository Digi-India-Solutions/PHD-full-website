import React, { useEffect, useState } from "react";
import axios from "axios";
import bannerImage from "../../Images/guides.png";
import { Link } from "react-router-dom";
import "./download.css";
import { Helmet } from "react-helmet";

const Downloads = () => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fetching resources from the API
    const fetchResources = async () => {
      try {
        const response = await axios.get("https://api.iirhe.org/api/get-resources");
        setResources(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch resources.");
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Error: {error}</p>;
  }

  return (
    <>
     <Helmet>
        <title>Resources Download | Access Valuable Resources | IIRHE</title>
        <meta
          name="description"
          content="Download a wide range of resources to help you in your professional and academic journey. Access guides, documents, and more."
        />
        <meta
          name="keywords"
          content="download resources, guides, PDFs, professional resources, academic documents, useful downloads"
        />
        <meta name="author" content="Your Company Name" />
      </Helmet>
      <div className="Homeabout">
        <h2 className="text-white text-center">Resources</h2>
        <div className="container mt-4">
          <div>
            {resources.map((resource) => (
              <div className="download-card" key={resource._id}>
                <p className="download_content">{resource.ResourcesName}</p>
                <div>
                  <a
                    href={`https://api.iirhe.org/${resource.ResourcesPdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <i style={{ color: "var(--color-blue)" }} className="bi bi-cloud-download"></i>{" "}
                    &nbsp; Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
