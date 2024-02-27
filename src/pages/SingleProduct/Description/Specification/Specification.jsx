import classes from './Specification.module.scss';
import processor from '../../../../assets/icon/specifications/processor.png';
import battery from '../../../../assets/icon/specifications/battery.png';
import display from '../../../../assets/icon/specifications/display-size.png';
import memory from '../../../../assets/icon/specifications/memory.png';
import camera from '../../../../assets/icon/specifications/camera.png';
import storage from '../../../../assets/icon/specifications/storage.png';
import os from '../../../../assets/icon/specifications/operating-system.png';

const Specification = () => {
  return (
    <section className={classes.specification}>
      <ul>
        <li>
          <img src={os} alt="" />
          Operating System IOS 12
        </li>
        <li>
          <img src={camera} alt="" />
          Camera 12+12+16MP
        </li>
        <li>
          <img src={processor} alt="" />
          Processor 16
        </li>
        <li>
          <img src={battery} alt="" />
          Battery 2500mAh
        </li>
        <li>
          <img src={memory} alt="" />
          Memory 4gb
        </li>
        <li>
          <img src={display} alt="" />
          Display 5 inches
        </li>
        <li>
          <img src={storage} alt="" />
          Storage 128gb
        </li>
      </ul>
    </section>
  );
};

export default Specification;
