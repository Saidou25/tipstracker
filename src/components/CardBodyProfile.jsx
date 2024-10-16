import emptyAvatar from "../assets/profileicon.png";

import "./Card.css";

const CardBodyProfile = ({ cardBodyTemplate }) => {
  return (
    <div className="row g-0">
      <div className="col-12">
        <div className="container-fluid">
          <img
            className="photo-url"
            src={
              cardBodyTemplate?.loggedinUser?.photoURL
                ? cardBodyTemplate.loggedinUser.photoURL
                : emptyAvatar
            }
            alt="avatar"
          />
        </div>
      </div>
      <section className="profile-info mt-4">
        <p className="col-12">
          Display name: {cardBodyTemplate?.loggedinUser?.displayName}
        </p>
        <p className="col-12">
          Contact: {cardBodyTemplate?.loggedinUser?.email}
        </p>
        <p className="col-12">
          Using Tip Tracker since: {cardBodyTemplate?.usingSince}
        </p>
      </section>
    </div>
  );
};
export default CardBodyProfile;
