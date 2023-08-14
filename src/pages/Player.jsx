import React, { useLayoutEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { getVideoSource } from '../actions';
//styles
import '../assets/styles/pages/Player.scss';

const Player = ({ history, location, match, playing, getVideoSource }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (setTimeout(() => <Redirect to='/404/' />, 3000));
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
