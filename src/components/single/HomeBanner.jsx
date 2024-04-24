import styles from "./HomeBanner.module.css";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

function HomeBanner({
  title,
  button,
  addButton = false,
  body,
  image,
  index = 0,
}) {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <section
        key={title}
        className={`${styles.shared}  ${index % 2 !== 0 && styles.reverseRow} `}
      >
        <div
          className={`${styles.sharedText} ${
            button[0] === "transparent-onBlack-btn" && styles.blackSection
          }`}
        >
          <div
            className={`${
              button[0] === "transparent-onBlack-btn" && styles.innerText
            } ${styles.innerInner}`}
          >
            <h1>{title}</h1>
            <p className={styles.blackBody}>{body}</p>
            {addButton && (
              <div>
                <Button
                  type={
                    button[0] === "transparent-onBlack-btn"
                      ? "transparent-onBlack-btn"
                      : "transparent-onWhite-btn"
                  }
                  arrow={true}
                  arrowColor={button[0] === "transparent-onBlack-btn" && "#fff"}
                  onClick={() => {
                    if (button[1] === "get an invite") setIsModal(true);
                  }}
                >
                  {button[1]}
                </Button>
                {/* <Arrow color={button[0] === "transparent-onBlack-btn" && "#fff"} /> */}
              </div>
            )}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="justImg" />
        </div>
      </section>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
}

export default HomeBanner;
