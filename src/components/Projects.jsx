import React from 'react';
import { Code, PDF } from '../assets/Icons';

const projects = [
  {
    id: "1",
    title: "Biped learning to walking using Reinforcement Learning",
    image: "https://t3.ftcdn.net/jpg/06/64/44/10/360_F_664441008_maKEBYmI0DUBSpFjGOmuA4hZJjdDNOMp.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, metus non tristique tempor, magna massa tincidunt erat, vulputate semper nibh turpis eu tellus. Donec enim nulla, elementum nec sagittis fringilla, egestas quis metus. Quisque varius rutrum dapibus. Sed at laoreet nunc. Curabitur elementum sodales cursus. Sed leo libero, eleifend ut mi a, tincidunt vestibulum libero. Integer posuere luctus urna, at dapibus purus dignissim eget. Praesent eget ligula et ipsum ullamcorper posuere id sit amet nulla. Aliquam eget est sed mauris scelerisque luctus vitae vel ligula.",
    teamName: "Patrícia Alves-Oliveira's Team",
  },
  {
    id: "3",
    title: "Biped learning to walking using Reinforcement Learning",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee914b4d-4411-47f4-a6bb-820ffbee7f30/d4i8xmf-ddd017ce-38d0-41e7-af8d-41e848440b4f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlOTE0YjRkLTQ0MTEtNDdmNC1hNmJiLTgyMGZmYmVlN2YzMFwvZDRpOHhtZi1kZGQwMTdjZS0zOGQwLTQxZTctYWY4ZC00MWU4NDg0NDBiNGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xzRibvqvGNXoLeBBpP2qk4DBG15qp-Fj4uzyQ-BFGe0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, metus non tristique tempor, magna massa tincidunt erat, vulputate semper nibh turpis eu tellus. Donec enim nulla, elementum nec sagittis fringilla, egestas quis metus. Quisque varius rutrum dapibus. Sed at laoreet nunc. Curabitur elementum sodales cursus. Sed leo libero, eleifend ut mi a, tincidunt vestibulum libero. Integer posuere luctus urna, at dapibus purus dignissim eget. Praesent eget ligula et ipsum ullamcorper posuere id sit amet nulla. Aliquam eget est sed mauris scelerisque luctus vitae vel ligula.",
    teamName: "Patrícia Alves-Oliveira's Team",
  },
  {
    id: "2",
    title: "Biped learning to walking using Reinforcement Learning",
    image: "https://i.pinimg.com/736x/0e/d6/f1/0ed6f1da3a12430ea518bcd477371fbd.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, metus non tristique tempor, magna massa tincidunt erat, vulputate semper nibh turpis eu tellus. Donec enim nulla, elementum nec sagittis fringilla, egestas quis metus. Quisque varius rutrum dapibus. Sed at laoreet nunc. Curabitur elementum sodales cursus. Sed leo libero, eleifend ut mi a, tincidunt vestibulum libero. Integer posuere luctus urna, at dapibus purus dignissim eget. Praesent eget ligula et ipsum ullamcorper posuere id sit amet nulla. Aliquam eget est sed mauris scelerisque luctus vitae vel ligula.",
    teamName: "Jonathan Reinink's Team",
  },
  {
    id: "4",
    title: "Biped learning to walking using Reinforcement Learning",
    image: "https://images.squarespace-cdn.com/content/v1/58bdb4b49f7456dff81be981/1526400901786-Q56GBT3OXBQ09NMEPHHU/030.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, metus non tristique tempor, magna massa tincidunt erat, vulputate semper nibh turpis eu tellus. Donec enim nulla, elementum nec sagittis fringilla, egestas quis metus. Quisque varius rutrum dapibus. Sed at laoreet nunc. Curabitur elementum sodales cursus. Sed leo libero, eleifend ut mi a, tincidunt vestibulum libero. Integer posuere luctus urna, at dapibus purus dignissim eget. Praesent eget ligula et ipsum ullamcorper posuere id sit amet nulla. Aliquam eget est sed mauris scelerisque luctus vitae vel ligula.",
    teamName: "Jonathan Reinink's Team",
  }
]

const Projects = () => {
  return (
    <section id="features" className="p-8 bg-gray-900 text-white justify-items-center">
      <div className="max-w-sm w-full lg:max-w-full lg:flex pb-8">
        <h1 className='text-4xl'>
          PROJECTS
        </h1>
      </div>
      {
        projects.map(project => {
          return (
            <div className="w-10/12 lg:flex pb-8" key={project.id}>
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${project.image})` }}>
              </div>
              <div className="bg-gray-700 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className='mb-8'>
                  <div className='flex mb-1'>
                    <p className="text-sm text-teal-200 hover:cursor-pointer flex items-center hover:text-white">
                      <PDF />&nbsp;&nbsp;PDF&nbsp;&nbsp;&nbsp;
                    </p>
                    <p className="text-sm text-teal-200 hover:cursor-pointer flex items-center hover:text-white">
                      <Code />&nbsp;&nbsp;Code
                    </p>
                  </div>
                  <div className="text-white font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-white text-base">{project.description}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=" alt="Avatar of Jonathan Reinink" />
                  <div className="text-sm">
                    <p className="text-white leading-none font-semibold">{project.teamName}</p>
                    <p className="text-white text-xs">Patrícia, Jonathan, Arjun, Hemanth, Marzuk</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  );
};

export default Projects;
