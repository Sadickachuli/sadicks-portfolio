import ProjectCard from "../components/projects/projectCard";

export default function ProjectsPage() {
  return (
    <article className="columns-2 gap-10 padd py-12">
      <ProjectCard 
        githubLink="https://youtu.be/zNDb_CeRdEk?si=qHdpqOugOg5HX12H"
        imageSrc="/images/projects/login.png"
        year="2023"
        author="Sadick"
        title="Sustainability Web App"
        isHalf
      />
      <ProjectCard 
        githubLink="https://bounce-ball-clone.vercel.app/"
        imageSrc="/images/projects/bounce.png"
        year="2022"
        author="Sadick"
        title="A Nostalgic Nokia Game"
      />
      <ProjectCard 
        githubLink="https://github.com/Sadickachuli/BarkBuddies.git"
        imageSrc="/images/projects/dog.png"
        year="2022"
        author="Sadick"
        title="Tinder For Dogs"
      />
      <ProjectCard 
        githubLink="https://github.com/Sadickachuli/MoveIn.git"
        imageSrc="/images/projects/move.png"
        year="2021"
        author="Sadick"
        title="Moving Made Easier"
      />
      
      <ProjectCard 
        githubLink="https://www.youtube.com/watch?v=yuXxs_8pC1c"
        imageSrc="/images/projects/htaiapp.png"
        year="2024"
        author="Sadick"
        title="An AI Mobile App For Your Health"
      />
      <ProjectCard 
        githubLink="https://github.com/Sadickachuli/artefact-doc-website"
        imageSrc="/images/projects/kuza.png"
        year="2023"
        author="Sadick"
        title="A Website To Amplify Women's Voices"
      />
      <ProjectCard 
        githubLink="https://github.com/Sadickachuli/Eco-Sheane.git"
        imageSrc="/images/projects/eco.png"
        year="2022"
        author="Sadick"
        title="A Website To Sell Shea Butter Products"
      />
      
      {/* Add more ProjectCard components as necessary */}
    </article>
  );
}
