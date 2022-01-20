import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';
import ProfileItem from './ProfileItem';

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <section className="container">
      {loading ? (
        <div> Loading...</div>
      ) : (
        <Fragment>
          <h1 className="large text-primary"> Developers</h1>
          <p className="lead"> Browse and connect with developers</p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
