import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import PrimaryBtn from "../../btn/PrimaryBtn";
import { useNavigate } from "react-router";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";

export default function Profile({ profile }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-12 m-auto mt-[100px] w-[80%] max-w-[700px]">
      <p className="text-lg font-semibold">
        {profile.name}, {profile.age}
      </p>
      <p className="text-gray-700 font-medium">{profile.title}</p>
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-2">
        <div className="flex items-center gap-x-2">
          <MdOutlineMailOutline size={24} />
          <p className="font-medium">{profile.email}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlinePhoneEnabled size={24} />
          <p className="font-medium">{profile.phone}</p>
        </div>
      </div>
      <a href={profile.linkedin} className="flex gap-x-2 cursor-pointer">
        <FaLinkedin size={24} />
        <span className="break-words max-w-[90%]">{profile.linkedin}</span>
      </a>
      <a href={profile.github} className="flex gap-x-2 cursor-pointer">
        <FaGithub size={24} />
        <span className="break-words max-w-[90%]">{profile.github}</span>
      </a>
      {profile.portfolio && (
        <a href={profile.portfolio} className="flex gap-x-2 cursor-pointer">
          <FaRegStar size={24} />
          <span className="break-words max-w-[90%]">{profile.portfolio}</span>
        </a>
      )}
      <p className="break-words">{profile.bio}</p>
      <div className="m-auto mt-8 w-fit">
        <PrimaryBtn onClick={() => navigate("manageprofile")}>
          <span className="text-lg">Hantera profil</span>
        </PrimaryBtn>
      </div>
    </div>
  );
}
