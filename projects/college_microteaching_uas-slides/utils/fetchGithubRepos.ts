import { ref } from 'vue';

const fetchRepos = () => {
  const repos = ref([]);
  const get = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();

    repos.value = data.map((el: any) => el.name);
  };

  return { data: repos, get };
};

export default fetchRepos;
