import React, { useState, useEffect, useRef } from "react";

const CountBox = ({ icon, end, heading, children }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={boxRef}
      className="bg-white p-6 rounded-lg  max-w-[400px] "
    >
      <div className="flex gap-4 items-center mb-4">
        <div className="text-3xl text-primaryGreen">{icon}</div>
        <span className="text-[70px] font-bold text-primaryBlue">
          {count}
        </span>
        <span className="text-3xl text-black">{heading}</span>
      </div>

    </div>
  );
};

const Counts = () => {
  return (
    <section id="counts" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col justify-center gap-8">
          <CountBox
            icon={<i className="fas fa-user-md"></i>}
            heading="TRUSTED CLIENTS"
            end={85}
          >

          </CountBox>

          <CountBox
            icon={<i className="far fa-hospital"></i>}
            end={41}
            heading="Departments"
          >
          </CountBox>
          <CountBox
            icon={<i className="far fa-hospital"></i>}
            end={441}
            heading="Finished Projects"
          >
          </CountBox>
        </div>
      </div>
    </section>
  );
};

export default Counts;
