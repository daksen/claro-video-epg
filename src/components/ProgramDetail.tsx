// interfaces
import { SelectedProgram } from '../interfaces';

interface ProgramDetailProps {
  selectedProgram: SelectedProgram | null;
}

const ProgramDetail = ({ selectedProgram }: ProgramDetailProps) => {

  if (!selectedProgram) { return null; }

  const { title, description, since, till, duration } = selectedProgram;

  const d = duration.split(":");

  return (
    <div className="program-detail">
      <h1 className="program-detail-title">
        {title}
      </h1>
      <p className="program-detail-time">
        {`${since} a ${till} - ${d[0]}h ${d[1]}m`}
      </p>
      <p className="program-detail-description">
        {description}
      </p>
    </div>
  );
}

export default ProgramDetail;
