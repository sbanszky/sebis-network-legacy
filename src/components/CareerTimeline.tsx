
import { Building2, GraduationCap, Cloud, Shield, Server } from "lucide-react";

const CareerTimeline = () => {
  const experiences = [
    {
      company: "UPC",
      role: "Network Engineer",
      description: "Started my career at this pan-European telecom provider, coordinating backbone upgrades alongside the NOC in Bucharest. Handled Cisco 7600 series routers and redesigned the access layer for Timișoara.",
      icon: Building2,
      color: "cyan",
      image: null
    },
    {
      company: "Polytechnic University",
      role: "Cisco CCNA Instructor",
      description: "Taught Cisco CCNA while working at UPC. After a year and a half, awarded Cisco's Expert Instructor Excellence Badge for maintaining an 80%+ student pass rate.",
      icon: GraduationCap,
      color: "green",
      image: "CCNA-expert-instructor.jpg"
    },
    {
      company: "Atos",
      role: "Security Engineer",
      description: "Worked mainly in the security domain with Checkpoint, Palo Alto, and Cisco ASA, handling upgrades and firewall rule base management. Participated in on-site data center visits in Germany and Belgium.",
      icon: Shield,
      color: "red",
      image: null
    },
    {
      company: "Nokia",
      role: "Cloud Integration Engineer",
      description: "Had two roles: managing a large African IP backbone with UK-based data centers, and as a Cloud Integration Engineer. Trained in Espoo, Finland, then led full on-site deployment in Chișinău, Moldova.",
      icon: Cloud,
      color: "blue",
      image: "nokiacloud.jpg"
    },
    {
      company: "IBM",
      role: "Global Data Center Engineer",
      description: "Worked for almost 4 years in a global team managing 7 data centers under a 'follow the sun' model. Extensive work with Vyatta, pfSense, Cisco ASA, and migrated Core DC ASA firewalls to Cisco Firepower.",
      icon: Server,
      color: "purple",
      image: ["IBM1.jpg", "IBM2.jpg", "IBM3.jpg"]
    },
    {
      company: "Cloudbasesolutions",
      role: "Infrastructure Consultant",
      description: "Helped relocate and rebuild a small data center. Handled pfSense BGP routing, Arista MLAG switching, and Proxmox-based server infrastructure across 3 racks.",
      icon: Building2,
      color: "orange",
      image: null
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "text-cyan-400 border-cyan-400 bg-cyan-400/10",
      green: "text-green-400 border-green-400 bg-green-400/10",
      red: "text-red-400 border-red-400 bg-red-400/10",
      blue: "text-blue-400 border-blue-400 bg-blue-400/10",
      purple: "text-purple-400 border-purple-400 bg-purple-400/10",
      orange: "text-orange-400 border-orange-400 bg-orange-400/10"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Career Journey
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-full border-2 ${getColorClasses(exp.color)}`}>
                  <exp.icon className="w-8 h-8" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <h3 className={`text-2xl font-bold mb-2 ${getColorClasses(exp.color).split(' ')[0]}`}>
                    {exp.company}
                  </h3>
                  <h4 className="text-xl text-slate-300 mb-4">{exp.role}</h4>
                  <p className="text-slate-400 leading-relaxed mb-6">{exp.description}</p>
                  
                  {exp.image && (
                    <div className="flex flex-wrap gap-4">
                      {Array.isArray(exp.image) ? (
                        exp.image.map((img, imgIndex) => (
                          <div key={imgIndex} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                            <div className="w-32 h-24 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                              <span className="text-slate-400 text-sm">{img}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                          <div className="w-32 h-24 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                            <span className="text-slate-400 text-sm">{exp.image}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Summary</h3>
            <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto text-lg">
              I bring solid experience in <span className="text-purple-400 font-semibold">routing, switching, firewalls, data centers, and cloud integration</span>, 
              with a strong focus on <span className="text-cyan-400 font-semibold">doing things properly and efficiently</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
