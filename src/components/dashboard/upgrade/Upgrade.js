import React from 'react';

const Upgrade = () => {
    return (
        <>
          <div>
  {/* Nav tabs */}
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="settings-tab" data-bs-toggle="tab" hdata-bs-targetref="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
    </li>
  </ul>
  {/* Tab panes */}
  <div className="tab-content">
    <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">..1.</div>
    <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...2</div>
    <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...3</div>
    <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...4</div>
  </div>
</div>


        </>
    )
}

export default Upgrade;
