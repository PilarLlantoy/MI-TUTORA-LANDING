import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesBestServices = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '¿Por qué somos el mejor servicio para ti?',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-image mb-16">
                  <Image
                  src={require('./../../assets/images/time.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-primary" styleName="color: #FF0000;">
                    Alta flexibilidad en tiempo y lugar
                  </h4>
                  <p className="m-0 text-sm">
                    Puedes escoger el horario que más se te acomode y tomar tus clases en cualquier lugar
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-primary">
                    Profesoras capacitadas para enseñarte
                  </h4>
                  <p className="m-0 text-sm">
                    Nos encargamos de brindarte profesoras altamente capacitadas para ayudarte en tu aprendizaje
                  </p>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/capacitaciones.png')}
                      alt="Features tile icon 02"
                      width={528}
                      height={396} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/dinero.png')}
                      alt="Features tile icon 02"
                      width={528}
                      height={396} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-primary">
                    Diferentes tarifas para escoger
                    </h4>
                  <p className="m-0 text-sm">
                    Escoge entre las tarifas de las diferentes profesoras que tiene por hora de enseñanza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesBestServices.propTypes = propTypes;
FeaturesBestServices.defaultProps = defaultProps;

export default FeaturesBestServices;