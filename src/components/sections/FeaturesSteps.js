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
const FeaturesSteps = ({
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
    title: '¿Qué pasos debes seguir?',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="contenido">
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className='number'>
                  <div className="blue"><h1 className='blue'>1</h1></div>
                </div>
                <div className="center-content">
                  <h4 className="mt-0 mb-8">
                    Busca tu curso
                    </h4>
                  <p >
                    Entre nuestros miles de profesores, encontrarás a tu profesor ideal. Se adaptará a tus necesidades y te ayudará a alcanzar tus objetivos
                  </p> 
                    <Image
                      src={require('./../../assets/images/curso.png')}
                      alt="Features split 03"
                      width={528}
                      height={396} />
                </div> 
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className='number'>
                  <div className="blue"><h1 className='blue'>2</h1></div>
                </div>
                <div className="center-content">
                  <h4 className="mt-0 mb-8">
                    Escoge una profesora
                    </h4>
                  <p >
                    Entre nuestros miles de profesores, encontrarás a tu profesor ideal. Se adaptará a tus necesidades y te ayudará a alcanzar tus objetivos
                  </p>
                  <Image
                      src={require('./../../assets/images/escoge-profesora.png')}
                      alt="Features split 03"
                      width={528}
                      height={396} />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className='number'>
                  <div className="blue"><h1 className='blue'>3</h1></div>
                </div>
                <div className="center-content">
                  <h4 className="mt-0 mb-8">
                    Escoge un horario
                    </h4>
                  <p >
                    Escoge un profesor online según tu disponibilidad horaria y disfruta de la flexibilidad de las clases en línea
                  </p>
                  <Image
                      src={require('./../../assets/images/horario.png')}
                      alt="Features split 03"
                      width={528}
                      height={396} />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <div className='number'>
                  <div className="blue"><h1 className='blue'>4</h1></div>
                </div>
                <div className="center-content">
                  <h4 className="mt-0 mb-8">
                    Reúnete con tu profesora
                    </h4>
                  <p >
                    Nuestra aula virtual tiene todo lo necesario para que realices las clases: Videoconferencia, pizarra, edición de documentos online...
                  </p>
                  <Image
                      src={require('./../../assets/images/reunete.png')}
                      alt="Features split 03"
                      width={528}
                      height={396} />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}

FeaturesSteps.propTypes = propTypes;
FeaturesSteps.defaultProps = defaultProps;

export default FeaturesSteps;