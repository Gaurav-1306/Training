import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import YAMLData from '../data/project.yaml';
import '../styling/styles.css';

const IndexPage = ({ data }) => {
  const projects = YAMLData;
  const [showVideosOnly, setShowVideosOnly] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const nodes = showVideosOnly
    ? projects.filter((project) => project.videos !== undefined && project.videos !== null && project.videos.trim() !== '')
    : projects.filter((project) => selectedStatus === '' || project.status === selectedStatus);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  console.log(projects)
  return (
    <div>
      <label>
        <input type="checkbox" checked={showVideosOnly} onChange={(event) => setShowVideosOnly(event.target.checked)} />
        Show modules with video links only
      </label>
      <div>STATUS</div>
      <select value={selectedStatus} onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="stable">Stable</option>
        <option value="alpha">Alpha</option>
        <option value="beta">Beta</option>
      </select>
      <div className ="projectlist" >
        {nodes.map((project) => (
          <div key={project.id} className={classNames("projectBox", {
            ["stableStatus"]: project.status === 'stable',
            ["alphaStatus"]: project.status === 'alpha',
            ["betaStatus"]: project.status === 'beta',
          })}>
            <h2>{project.name}</h2>
            <img src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23165047/Importance-of-Books.jpg' height={"100px"} width={'auto'} />
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <p>Repository: <a href={project.repository}>{project.repository}</a></p>
            <p>Webpage: <a href={project.webpage}>{project.webpage}</a></p>
            <p>Video: <a href={project.videos}>{project.videos}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
