import "./Business.css";

const Business = () => {
  return (
    <div className="business">
      <div className="businessContainer">
        <h1>Fiverr Business</h1>
        <p>Scale your business with vetted freelancers and curated services.</p>

        <div className="features">
          <div className="card">
            <h3>Dedicated Talent</h3>
            <p>Work with top freelancers selected for your business.</p>
          </div>

          <div className="card">
            <h3>Team Collaboration</h3>
            <p>Invite your team and manage projects easily.</p>
          </div>

          <div className="card">
            <h3>Business Tools</h3>
            <p>Advanced reporting and billing features.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
