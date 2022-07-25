import React from "react";

function ProfileBio({ currentProfile }) {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 Tags Watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            {currentProfile?.about}
          </>
        ) : (
          <p>No Bio Found</p>
        )}
      </div>
      <div>
        <h4>Location</h4>
        {currentProfile?.location?.country ? (
          <>
            <p>Country : {currentProfile?.location?.country}</p>
            <p>State : {currentProfile?.location?.state}</p>
            <p>City : {currentProfile?.location?.city}</p>
          </>
        ) : (
          <p>User has not provided location!!!</p>
        )}
      </div>
    </div>
  );
}

export default ProfileBio;
