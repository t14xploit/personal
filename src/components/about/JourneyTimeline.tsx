import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { RiFootprintFill } from "react-icons/ri";
import styles from './JourneyTimeline.module.css';  // Import the CSS module

const JourneyTimeline = () => {
  const steps = [
    {
      title: "Beetroot Academy",
      subtitle: "Frontend Studies",
      time: "May – Dec 2022",
      description:
        "Completed a comprehensive frontend development program covering HTML, CSS, JavaScript, and React.",
    },
    {
      title: "SheCodes Workshops",
      subtitle: "4 Workshops",
      time: "Throughout 2022",
      description:
        "Participated in 4 intensive SheCodes frontend workshops focused on real-world projects and hands-on coding.",
    },
    {
      title: "CS Degree – UoPeople",
      subtitle: "BSc in Computer Science",
      time: "Aug 2022 – 2024",
      description:
        "Pursued and completed a Bachelor's degree in Computer Science at University of the People.",
    },
    {
      title: "Lexicon University",
      subtitle: "Full-Stack Dev",
      time: "Started Nov 2024",
      description:
        "Currently studying Full-Stack Web Development, including backend, databases, and cloud technologies.",
    },
  ];

  const footprints = Array.from({ length: 26 }, (_, i) => {
    const offset = Math.floor(Math.random() * 20) - 10;
    return (
      <div
        key={i}
        className={`relative`}
        style={{ top: `${offset}px` }}
      >
        <RiFootprintFill className="text-[#00f0ff] text-2xl rotate-90 opacity-30" />
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>My Journey</h2>

      {/* Shuffled footprint path */}
      <div className={styles.footprints}>
        {footprints}
      </div>

      {/* Steps below the path */}
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button className={styles.stepButton}>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepTime}>{step.time}</div>
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="center"
              sideOffset={12}
              avoidCollisions={false}
              className={styles.popoverContent}
            >
              <div className={styles.stepSubtitle}>{step.subtitle}</div>
              <p className={styles.stepDescription}>{step.description}</p>
              <Badge variant="outline" className={styles.badge}>
                {step.time}
              </Badge>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
