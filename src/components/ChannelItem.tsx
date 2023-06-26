import { Channel, ChannelBox, ChannelLogo } from 'planby';

interface ChannelItemProps {
  channel: Channel;
}

const ChannelItem = ({ channel }: ChannelItemProps) => {

  const { title, position, number, logo } = channel;

  return (
    <ChannelBox {...position}>
      <h3 className="channel-number">{number}</h3>
      <ChannelLogo
        src={logo}
        alt={title}
        style={{ maxHeight: 120, maxWidth: 120 }}
      />
    </ChannelBox>
  );
};

export default ChannelItem;
