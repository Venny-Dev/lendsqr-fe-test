import styles from "./UserProfileCard.module.scss";

interface UserProfileCardProps {
  userData: {
    name: string;
    id: string;
    rating: number;
    tier: string;
    balance: string;
    bankAccount: string;
  };
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
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 20C24.1421 20 27.5 16.6421 27.5 12.5C27.5 8.35786 24.1421 5 20 5C15.8579 5 12.5 8.35786 12.5 12.5C12.5 16.6421 15.8579 20 20 20Z"
              stroke="#213F7D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.9999 35C34.9999 28.0964 28.2842 22.5 19.9999 22.5C11.7156 22.5 4.99988 28.0964 4.99988 35"
              stroke="#213F7D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
