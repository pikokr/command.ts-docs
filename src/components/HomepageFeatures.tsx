/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '데코레이터 사용',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Command.TS는 타입스크립트 데코레이터를 이용해서 커맨드를 만든다구요!
      </>
    ),
  },
  {
    title: '슬래시 커맨드 지원',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          슬래시 커맨드 자동 등록을 지원해요!
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   image: '/img/undraw_docusaurus_mountain.svg',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
