import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

function SendOtpForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        {isSendingOtp ? <Loading /> : <Button> ارسال کد تائید</Button>}
      </form>
    </div>
  );
}

export default SendOtpForm;
