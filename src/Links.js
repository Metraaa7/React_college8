import React from 'react'
import { social } from './data'

function Links() {
  return (
    <ul className="social-icons">
        {social.map((soc) => {
            return (
                <li key={soc.id}>
                    <a href = {soc.url}>{soc.icon}</a>
                </li>
            );
        })}
    </ul>
  );
 
}

export default Links;