import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <div className="mb-3">
                <header className="navbar navbar-expand-md navbar-light d-print-none">
                    <div className="container-xl">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                            <Link to=".">
                                <img src="./static/logo.svg" width="110" height="32" alt="Tabler" className="navbar-brand-image" />
                            </Link>
                        </h1>
                        <div className="navbar-nav flex-row order-md-last">
                            <div className="d-none d-md-flex">
                                <Link to="?theme=dark" className="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
                                </Link>
                                <Link to="?theme=light" className="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>
                                </Link>
                                <div className="nav-item dropdown d-none d-md-flex me-3">
                                    <Link to="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                                        <span className="badge bg-red"></span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Last updates</h3>
                                            </div>
                                            <div className="list-group list-group-flush list-group-hoverable">
                                                <div className="list-group-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
                                                        <div className="col text-truncate">
                                                            <Link to="#" className="text-body d-block">Example 1</Link>
                                                            <div className="d-block text-muted text-truncate mt-n1">
                                                                Change deprecated html tags to text decoration classes (#29604)
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link to="#" className="list-group-item-actions">

                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                        <div className="col text-truncate">
                                                            <Link to="#" className="text-body d-block">Example 2</Link>
                                                            <div className="d-block text-muted text-truncate mt-n1">
                                                                justify-content:between ⇒ justify-content:space-between (#29734)
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link to="#" className="list-group-item-actions show">

                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                        <div className="col text-truncate">
                                                            <Link to="#" className="text-body d-block">Example 3</Link>
                                                            <div className="d-block text-muted text-truncate mt-n1">
                                                                Update change-version.js (#29736)
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link to="#" className="list-group-item-actions">

                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
                                                        <div className="col text-truncate">
                                                            <Link to="#" className="text-body d-block">Example 4</Link>
                                                            <div className="d-block text-muted text-truncate mt-n1">
                                                                Regenerate package-lock.json (#29730)
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link to="#" className="list-group-item-actions">

                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                                    <span className="avatar avatar-sm" style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}></span>
                                    <div className="d-none d-xl-block ps-2">
                                        <div>Dunn Slane</div>
                                        <div className="mt-1 small text-muted">Research Nurse</div>
                                    </div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <Link to="#" className="dropdown-item">Status</Link>
                                    <Link to="./profile.html" className="dropdown-item">Profile</Link>
                                    <Link to="#" className="dropdown-item">Feedback</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="./settings.html" className="dropdown-item">Settings</Link>
                                    <Link to="./sign-in.html" className="dropdown-item">Logout</Link>
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="./#">
                                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                            </span>
                                            <span className="nav-link-title">
                                                First
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./#">
                                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                            </span>
                                            <span className="nav-link-title">
                                                Second
                                            </span>
                                            <span className="badge badge-sm bg-red">2</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#navbar-third" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                            </span>
                                            <span className="nav-link-title">
                                                Third
                                            </span>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="./#">
                                                First
                                            </Link>
                                            <Link className="dropdown-item" to="./#">
                                                Second
                                            </Link>
                                            <Link className="dropdown-item" to="./#">
                                                Third
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="./#">
                                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                            </span>
                                            <span className="nav-link-title">
                                                Disabled
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavBar
