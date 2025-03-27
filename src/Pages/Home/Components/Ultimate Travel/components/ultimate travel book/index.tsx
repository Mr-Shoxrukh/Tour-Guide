import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../db/firebase"; // Firebase sozlamalarini import qilish

interface Guide {
  id: string;
  name: string;
  guideExperience: number;
  languages?: string[];
}

const BookingPage = () => {
  const [guide, setGuide] = useState<Guide | null>(null);
  const guideId = "rHgzFwtQxWwjhAajUVbA"; // Shu yerga kerakli guide ID'sini yozing

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const docRef = doc(db, "guides", guideId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setGuide({ id: docSnap.id, ...docSnap.data() } as Guide);
        } else {
          console.log("No such guide!");
        }
      } catch (error) {
        console.error("Error fetching guide:", error);
      }
    };

    fetchGuide();
  }, [guideId]);

  return (
    <div>
      <h1>Guide Details</h1>
      {guide ? (
        <div>
          <strong>{guide.name}</strong> - {guide.guideExperience} years
          experience
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookingPage;
