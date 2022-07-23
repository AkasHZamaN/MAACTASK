import { BriefcaseIcon, LocationMarkerIcon, MailIcon, PencilAltIcon, PencilIcon, PhoneIcon, UserIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import firebaselogo from '../../images/firebase.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import userIcon from '../../images/userIcon.png';

const MyProfile = ({user}) => {
    return (
        <div>
      <input type="checkbox" id="mymodal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
            <div className="avatar online">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : userIcon } alt="" />
                </div>
            </div>
            <div className="text-left font-normal text-black">
            <p className="py-4 flex gap-4">
                <UserIcon className="w-6 h-6 text-secondary"></UserIcon>
            {user?.displayName}
          </p>
          <p className="pb-4  flex gap-4">
          <MailIcon className="w-6 h-6 text-secondary"></MailIcon>
            {user?.email}
          </p>

          <p className="pb-4  flex gap-4">
            <BriefcaseIcon className="w-6 h-6 text-secondary"></BriefcaseIcon>
            {user?.role ? user?.role : 'Developer'}
          </p>

          <p className="pb-4  flex gap-4">
            <PencilIcon className='w-6 h-6 text-secondary'></PencilIcon>
            {user?.jobId ? user?.jobId : 'unavailbale'}
          </p>
          
          
          <p className="pb-4  flex gap-4">
          <LocationMarkerIcon className="w-6 h-6 text-secondary"></LocationMarkerIcon>
            {user?.address ? user?.address : 'Shibgonj, Sylhet-3100, Bangladesh'}
          </p>

          <p className="pb-4  flex gap-4">
          <PhoneIcon className="w-6 h-6 text-secondary"></PhoneIcon>
            {user?.phone ? user?.phone : '+8801725421914'}
          </p>
          <p className="pb-4  flex gap-4">
            <img className="w-6 h-6 text-secondary" src={firebaselogo} alt="" />
            {user?.providerId}
          </p>
          <p className="pb-4  flex gap-4">
              <PencilAltIcon className="w-6 h-6 text-secondary"></PencilAltIcon>
            {user?.uid}
          </p>
            </div>
          <div className="modal-action flex justify-between">
            <div className='flex gap-4 items-center'>
                <Link to="#"><img className='w-6 h-6' src={facebook} alt="" /></Link>
                <Link to="#"><img className='w-6 h-6' src={github} alt="" /></Link>
                <Link to="#"><img className='w-6 h-6' src={linkedin} alt="" /></Link>
            </div>
            <label htmlFor="mymodal" className="btn bg-secondary text-white font-bold border-0">
             X
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyProfile;