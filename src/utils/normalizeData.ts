import { Channel, Program } from "planby";
import { v4 as uuidv4 } from 'uuid';
// interfaces
import { ResponseData } from "../interfaces";

/**
 * This function normalizes data from a response object by extracting and reformatting channels and
 * programs information.
 * @param {ResponseData} data - The input data that needs to be normalized. It is expected to have a
 * property called "response" which contains an array of channels, each of which has an array of
 * events.
 * @returns an object with two properties: `normalizedChannels` and `normalizedPrograms`. These
 * properties contain arrays of objects that have been normalized from the `response` property of the
 * `data` parameter passed to the function.
 */
export default function normalizeData(data: ResponseData) {

  const { response } = data;

  const normalizedChannels: Channel[] = [];
  const normalizedPrograms: Program[] = [];

  for (const channel of response.channels) {
    const newChannel = {
      uuid: channel.id,
      type: "channel",
      title: channel.name,
      provider: channel.provider_metadata_id,
      logo: channel.image,
      number: channel.number,
      position: {
        top: 0,
        height: 100,
      }
    }

    normalizedChannels.push(newChannel);

    for (const event of channel.events) {
      const newProgram = {
        id: `${event.channel_id}-${event.id}-${uuidv4()}`,
        channelUuid: event.channel_id,
        title: event.name,
        description: event.description,
        since: event.date_begin,
        till: event.date_end,
        duration: event.duration,
        image: "",
      }

      normalizedPrograms.push(newProgram);
    }
  }

  return {
    normalizedChannels,
    normalizedPrograms,
  };
}
