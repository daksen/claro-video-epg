import { Epg as PlanbyEpg, Layout } from "planby";
// hooks
import usePlanby from "../hooks/usePlanby";
// components
import Timeline from "./Timeline";
import ChannelItem from "./ChannelItem";
import ProgramItem from "./ProgramItem";
import ProgramDetail from "./ProgramDetail";

const Epg = () => {

  const { 
    isLoading, 
    debouncedSelectedProgram, 
    setSelectedProgram, 
    getEpgProps, 
    getLayoutProps, 
  } = usePlanby();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "40%" }}>
        <ProgramDetail selectedProgram={debouncedSelectedProgram} />
      </div>
      <div style={{ height: "60%" }}>
        <PlanbyEpg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderChannel={({ channel }) => (
              <ChannelItem
                key={channel.uuid}
                channel={channel}
              />
            )}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem 
                key={program.data.id} 
                program={program}
                setSelectedProgram={setSelectedProgram}
                {...rest} 
              />
            )}
          />
        </PlanbyEpg>
      </div>
    </div>
  );
}

export default Epg;
