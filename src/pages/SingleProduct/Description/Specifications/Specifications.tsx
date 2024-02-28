import React from 'react';
import classes from './Specification.module.scss';
import processor from '@/assets/icon/specifications/processor.png';
import battery from '@/assets/icon/specifications/battery.png';
import display from '@/assets/icon/specifications/display-size.png';
import memory from '@/assets/icon/specifications/memory.png';
import camera from '@/assets/icon/specifications/camera.png';
import storage from '@/assets/icon/specifications/storage.png';
import os from '@/assets/icon/specifications/operating-system.png';
import { useLoaderData } from 'react-router';

interface ISpecifications {
  battery: string;
  camera: string;
  display: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

const icons = {
  battery: battery,
  camera: camera,
  display: display,
  memory: memory,
  os: os,
  processor: processor,
  storage: storage,
};

const Specifications = () => {
  const { specifications } = useLoaderData() as {
    specifications: ISpecifications;
  };

  return (
    <section className={classes.specification}>
      <ul>
        {Object.keys(specifications).map((key) => (
          <li key={key}>
            <img
              src={icons[key as keyof ISpecifications]}
              alt={`${key} icon`}
            />
            {specifications[key as keyof ISpecifications]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specifications;
