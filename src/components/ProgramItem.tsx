import {
  ProgramItem as ProgramItemType,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
} from "planby";
// interfaces
import { SelectedProgram } from "../interfaces";

interface ProgramItemProps extends ProgramItemType {
  setSelectedProgram: (selectedProgram: SelectedProgram | null) => void;
}

const ProgramItem = ({ program, setSelectedProgram, ...rest }: ProgramItemProps) => {

  const { styles, formatTime, set12HoursTimeFormat } = useProgram({
    program,
    ...rest,
  });

  const { data } = program;
  const { title, description, duration, since, till } = data;

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  const handleMouseEnter = () => {
    setSelectedProgram({
      title,
      description,
      since: sinceTime,
      till: tillTime,
      duration,
    });
  }

  const handleMouseLeave = () => {
    setSelectedProgram(null);
  }

  return (
    <ProgramBox 
      width={styles.width} 
      style={styles.position}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProgramContent width={styles.width} isLive={false}>
        <ProgramFlex>
          <ProgramStack>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
}

export default ProgramItem;
