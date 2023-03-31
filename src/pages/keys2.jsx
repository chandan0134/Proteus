import { FunctionComponent, useCallback } from "react";
import styles from "./assests/SignUpComplete.module.css";

const SignUpComplete: FunctionComponent = () => {
  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onIcbaselineRemoveRedEyeIconClick = useCallback(() => {
    // Please sync "Sign Up Complete" to the project
  }, []);

  const onIcbaselineRemoveRedEyeIcon1Click = useCallback(() => {
    // Please sync "Sign Up Complete" to the project
  }, []);

  return (
    <div className={styles.signUpComplete}>
      <p className={styles.youHaveSuccessfully}>
        You have successfully registered with Proteus!
      </p>
      <p className={styles.hereAreYour}>
        Here are your generated public and private keys
      </p>
      <p className={styles.proteus}>Proteus</p>
      <button className={styles.transactionKeyWrapper}>
        <b className={styles.transactionKey}>Transaction Key</b>
      </button>
      <b className={styles.usedToDecrypt}>Used to decrypt transactional data</b>
      <button
        className={styles.signUpCompleteChild}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.next}>Next</div>
      <img
        className={styles.materialSymbolsarrowRightAIcon}
        alt=""
        src="/materialsymbolsarrowrightalt.svg"
      />
      <img className={styles.animation640Lfusqhls1Icon} alt="" src="" />
      <img
        className={styles.icbaselineRemoveRedEyeIcon}
        alt=""
        src="/icbaselineremoveredeye.svg"
        onClick={onIcbaselineRemoveRedEyeIconClick}
      />
      <div className={styles.hy4eyghijfws2fi3}>hy4eyghijfws2fi3</div>
      <button className={styles.profileKeyWrapper}>
        <b className={styles.transactionKey}>Profile Key</b>
      </button>
      <img
        className={styles.icbaselineRemoveRedEyeIcon1}
        alt=""
        src="/icbaselineremoveredeye1.svg"
        onClick={onIcbaselineRemoveRedEyeIcon1Click}
      />
    </div>
  );
};

export default SignUpComplete;
