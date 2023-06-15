import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6ws_wKLsz9mEx1azqjZtoa0acEtIdGbhyqaykkOB&s",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_empolyment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
