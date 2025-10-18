import type { UserProfileType } from "../../../utils/types";
import styles from "./UserProfileCard.module.scss";

interface UserProfileCardProps {
  userData: UserProfileType;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 3; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0L10.3511 5.52786L16 6.20871L11.8 10.0413L12.7023 16L8 13.2279L3.29772 16L4.2 10.0413L0 6.20871L5.64886 5.52786L8 0Z"
            fill="#E9B200"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0L10.3511 5.52786L16 6.20871L11.8 10.0413L12.7023 16L8 13.2279L3.29772 16L4.2 10.0413L0 6.20871L5.64886 5.52786L8 0Z"
            fill="#E0E0E0"
          />
        </svg>
      );
    }
  }
  return stars;
};

function UserProfileCard({ userData }: UserProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img src="/avatar-pfp.png" alt="avatar" width={100} height={100} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{userData.name}</h2>
          <p className={styles.userId}>{userData.id}</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.tierInfo}>
        <p className={styles.label}>{userData.tier}</p>
        <div className={styles.stars}>{renderStars(userData.rating)}</div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bankInfo}>
        <h3 className={styles.balance}>{userData.balance}</h3>
        <p className={styles.account}>{userData.bankAccount}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
