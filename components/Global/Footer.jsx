import styles from './Footer.module.css'
import { Coffee } from 'react-feather'
const Unicon = (...props) => (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='far'
    data-icon='unicorn'
    style={{ bottom: '2px' }}
    className='relative inline-block w-5 h-5 mx-1'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 640 512'
    {...props}
  >
    <path
      fill='currentColor'
      d='M631.98 64H526.61l-15.28-18.57c16.37-5.23 29.03-18.72 32.51-35.79C544.85 4.68 540.96 0 535.9 0H399.95c-68.41 0-125.83 47.95-140.42 112H176c-38.13 0-71.77 19.22-92.01 48.4C37.36 162.55 0 200.84 0 248v56c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-56c0-13.22 6.87-24.39 16.78-31.68-.18 2.59-.78 5.05-.78 7.68 0 30.13 11.9 58.09 32.16 78.58l-12.95 43.76a78.913 78.913 0 0 0-1.05 40.84l24.12 100.29c3.46 14.38 16.32 24.52 31.11 24.52h74.7c20.86 0 36.14-19.64 31.02-39.86l-25.53-100.76 8.51-23.71L256 356.2V480c0 17.67 14.33 32 32 32h80c17.67 0 32-14.33 32-32V324.35c20.57-23.15 32-52.8 32-84.35v-5.62c20.95 6.97 38.32.72 40.93-.17l31.03-10.59c23.96-8.18 40.06-30.7 40.04-56.01l-.04-52.27 92.46-36.67c6.59-4.4 3.48-14.67-4.44-14.67zM488.46 178.19l-31.02 10.59c-1.51.52-9.71 2.95-16.48-3.83L416 160h-32v80c0 26.09-12.68 49.03-32 63.64V464h-48V320l-107.91-30.83-28.65 79.78L191.53 464H150l-21.13-87.86a31.698 31.698 0 0 1 .37-16.18l22.7-76.72C128.54 273.72 112 250.83 112 224c0-35.35 28.65-64 64-64h127.95v-16c0-53.02 42.98-96 96-96h51.33l44.67 54.28.05 65.35c0 4.77-3.03 9.02-7.54 10.56zM432 80c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z'
    ></path>
  </svg>
)
export default function GlobalFooter() {
  return (
    <footer>
      {/* <div className={styles.footer1}>
        <div className='container flex justify-center'>
          <div className='mr-4 w-80'>
            <h4 className='mb-2'>Headline noch schreiben</h4>
            <p>
              Kiah Bratzn Bisgurn Butzelküah Diridaari Dockal Wihsch. Ebban Bua
              machad gnaaht ellerbätsch. Gschert darenna dorat Luada Hornochs.
              Gwieft Hohdan kaannt Schuxn eahm Surri Heigeign. Muas waar ebbs
              liab boid grohskopfat z’ weng.
            </p>
          </div>
          <div className='ml-4 w-80'>
            <h4 className='mb-2'>Headline noch schreiben</h4>
            <p>
              Kiah Bratzn Bisgurn Butzelküah Diridaari Dockal Wihsch. Ebban Bua
              machad gnaaht ellerbätsch. Gschert darenna dorat Luada Hornochs.
              Gwieft Hohdan kaannt Schuxn eahm Surri Heigeign. Muas waar ebbs
              liab boid grohskopfat z’ weng.
            </p>
          </div>
        </div>
      </div> */}
      <div className={styles.footer2}>
        <div className='container text-center'>
          Markus Sommer since 1984, 100% Made with{' '}
          <Coffee
            height='17'
            style={{ bottom: '2px' }}
            className='relative inline-block'
          />{' '}
          and <Unicon />
          in <span className={styles.highlight}>Bavaria</span>
        </div>
      </div>
    </footer>
  )
}
