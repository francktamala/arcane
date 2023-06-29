import React from 'react'
import Icon from 'react-google-material-icons'

export default function ServiceCard({ title, text, icon, isDark }) {
    return (
        <div className="col-lg-4 col-md-6" style={{ marginBottom: 30 }}>
            <div className="service-card">
                <h3 className={(!isDark ? "txt-black" : "txt-White")}>{title} </h3>
                <span style={{color: isDark ? "#fff" : "#03318c"}}><Icon icon={icon} size={50}/></span>
                <h5 className={(!isDark ? "txt-black" : "txt-White")}>
                    {text}
                </h5>
            </div>
        </div>
    )
}
