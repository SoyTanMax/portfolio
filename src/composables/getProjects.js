import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import {ref} from 'vue'
import { db } from '../services/firebase'

const getProjects = () => {
    const projects = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        const q = query(collection(db, 'projects'), orderBy("number", "asc"))
        const res = await getDocs(q);
        projects.value = res.docs.map(doc => {
          return {...doc.data(), key: doc.id}
        });
      }
      catch (error) {
        error.value = error.message
      }
    }
    return {projects, error, load}
}

export default getProjects