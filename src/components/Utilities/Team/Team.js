import SectionTitle from "../SectionTitle/SectionTitle";
import Member from "./Member";
import roster from "../../../data/roster";

const Team = () => {
    return (
        <section id="team" className="team-area2 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-relative">
                        <SectionTitle titlefirst='Meet the' titleSec='Roster' />
                    </div>
                </div>
                <div className="row ">
                    <Member teamData={roster} />
                </div>
            </div>
        </section>
    );
}
export default Team;
