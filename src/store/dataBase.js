import { db } from "@/fireBaseConfig";
import { nanoid } from "nanoid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { auth } from "../fireBaseConfig";
import router from "@/router/router";
export const useDataStore = defineStore("database", {
  state: () => ({
    documents: [],
    loadingData: false,
  }),
  actions: {
    async getUrls() {
      if (this.documents.length !== 0) {
        return;
      }
      this.loadingData = true;
      try {
        const q = query(
          collection(db, "urls"),
          where("user", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingData = false;
      }
    },
    async addUrl(name) {
      try {
        const objectData = {
          name: name,
          short: nanoid(6),
          user: auth.currentUser.uid,
        };
        const docRef = await addDoc(collection(db, "urls"), objectData);
        console.log(docRef);
        this.documents.push({
          ...objectData,
          id: docRef.id,
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log("ok");
      }
    },
    async deleteUrl(id) {
      try {
        const docRef = doc(db, "urls", id);

        const docSpan = await getDoc(docRef);
        if (!docSpan.exists()) {
          throw new Error("The document does not exist");
        }

        if (docSpan.data().user !== auth.currentUser.uid) {
          throw new Error("You can not delete this url");
        }

        await deleteDoc(docRef);
        this.documents = this.documents.filter((item) => item.id !== id);
      } catch (error) {
        console.log(error.message);
      }
    },
    async readUrl(id) {
      try {
        const docRef = doc(db, "urls", id);

        const docSpan = await getDoc(docRef);
        if (!docSpan.exists()) {
          throw new Error("The document does not exist");
        }

        if (docSpan.data().user !== auth.currentUser.uid) {
          throw new Error("You can not delete this url");
        }
        return docSpan.data().name;
      } catch (error) {
        console.log(error.message);
      }
    },
    async editUrl(id, name) {
      try {
        const docRef = doc(db, "urls", id);

        const docSpan = await getDoc(docRef);
        if (!docSpan.exists()) {
          throw new Error("The document does not exist");
        }

        if (docSpan.data().user !== auth.currentUser.uid) {
          throw new Error("You can not delete this url");
        }
        await updateDoc(docRef, {
            name: name
        })
        this.documents = this.documents.map(item => item.id === id ? ({...item, name: name} ) : item )
        router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    },
  },
});
