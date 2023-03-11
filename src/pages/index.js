import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectYaml {
        nodes {
          description
          id
          repository
          status
          videos
          webpage
        }
      }
    }
  `);

  const [showVideosOnly, setShowVideosOnly] = useState(false);

  const nodes = showVideosOnly
    ? data.allProjectYaml.nodes.filter((node) => node.videos !== undefined && node.videos !== null && node.videos.trim() !== '')
    : data.allProjectYaml.nodes;

  return (
    <div>
      <label>
        <input type="checkbox" checked={showVideosOnly} onChange={(event) => setShowVideosOnly(event.target.checked)} />
        Show modules with video links only
      </label>
      {nodes.map((node) => (
        <div key={node.id}>
          <h2>{node.name}</h2>
          <p>{node.description}</p>
          {node.videos && <a href={node.videos}>Watch video</a>}
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
