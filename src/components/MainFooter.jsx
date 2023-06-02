import Link from 'next/link';

export default function Mainfooter() {
  return (
    <footer className="footer footer-transparent d-print-none">
      <div className="container-xl">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                <Link className="link-secondary" href="#">Page Link</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright &copy; 2023
                <a href="." className="link-secondary">Tabler</a>.
                All rights reserved.
              </li>
              <li className="list-inline-item">
                <a href="./changelog.html" className="link-secondary" rel="noopener">
                  v1.0.0-beta19
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>)
}