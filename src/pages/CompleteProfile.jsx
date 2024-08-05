import CompleteProfileForm from "../featuers/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfile;
