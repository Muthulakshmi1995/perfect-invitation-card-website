import React from 'react';
import {Link} from 'react-router-dom';

export default function Empty({text,action,to}){return <div className="empty"><div>♡</div><h2>{text}</h2><Link className="btn" to={to}>{action}</Link></div>}
