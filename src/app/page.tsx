import Image from 'next/image'
import styles from './page.module.css'
import MainLayout from '@/components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
<div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl d-flex flex-column justify-content-center">
            <div className="empty">
              <div className="empty-img"><img src="./assets/undraw_printing_invoices_5r4r.svg" height="128" alt="" />
              </div>
              <p className="empty-title">No results found</p>
              <p className="empty-subtitle text-muted">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="empty-action">
                <a href="./." className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>
                  Add your first client
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
