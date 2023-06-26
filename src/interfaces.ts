export interface ResponseData {
  entry: Entry;
  response: Response;
  status: string;
  msg: string;
}

export interface Entry {
  device_id: string;
  device_category: string;
  device_model: string;
  device_type: string;
  device_so: string;
  format: string;
  device_manufacturer: string;
  authpn: string;
  authpt: string;
  api_version: string;
  region: string;
  hks: string;
  user_id: string;
  date_from: string;
  date_to: string;
  quantity: string;
}

export interface Response {
  channels: Channel[];
  total: number;
}

export interface Channel {
  id: string;
  number: string;
  name: string;
  hd: boolean;
  image: string;
  group_id: string;
  liveref: string;
  epg_url: string;
  provider_metadata_id: number;
  provider_metadata_name: string;
  group: Group;
  events: Event[];
}

export interface Event {
  channel_id: string;
  id: string;
  name: string;
  description: string;
  talent: null | string;
  date_begin: string;
  date_end: string;
  unix_begin: number;
  unix_end: number;
  duration: string;
  language: string;
  type: string;
  group_id: null | string;
  confirmado: null | string;
  id_empleado: null | string;
  tms_id: null | string;
  event_alf_id: string;
  ext_ncont_id: string;
  ext_nevt_id: string;
  ext_actors: null | string;
  ext_director: null | string;
  ext_year: null | string;
  ext_country: string | null;
  ext_original_name: string;
  ext_ep_original_name: null;
  ext_series_id: null | string;
  ext_season_id: null | string;
  ext_episode_id: null | string;
  ext_language: string;
  ext_serie_short_desc: null | string;
  ext_serie_desc: null | string;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  ext_eventimage_name: string;
  ext_eventimage_name_base: string;
  ext_catchup: string;
  ext_startover: string;
  ext_recordable: string;
  parental_rating: string;
  aud_stereo: string;
  aud_dolby: string;
  vid_black_and_white: string;
  dvb_content: null | string;
  user_content: null | string;
  group_rel: null | string;
  gmt: number;
}

export interface Group {
  common: Common;
}

export interface Common {
  id: string;
  title: string;
  title_episode: null | string;
  title_uri: string;
  title_original: string;
  description: string;
  description_large: string;
  short_description: null | string;
  image_large: string;
  image_medium: string;
  image_small: string;
  image_still: null | string;
  image_background: string;
  url_imagen_t1: string;
  url_imagen_t2: string;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  image_clean_horizontal: string;
  image_clean_vertical: string;
  image_clean_square: string;
  image_sprites: string;
  image_frames: string;
  image_trickplay: string;
  image_external: null | string;
  duration: null | string;
  date: string;
  year: null | string;
  preview: string;
  season_number: null | string;
  episode_number: null | string;
  format_types: string;
  live_enabled: string;
  live_type: string;
  live_ref: string;
  timeshift: null | string;
  votes_average: number;
  rating_code: string;
  proveedor_name: string;
  proveedor_code: string;
  encoder_tecnology: Tecnology;
  recorder_technology: Tecnology;
  resource_name: null | string;
  rollingcreditstime: null | string;
  rollingcreditstimedb: null | string;
  is_series: boolean;
  channel_number: string;
}

export interface Tecnology {
  id: null | string;
  desc: null | string;
}

export interface SelectedProgram {
  title: string;
  description: string;
  since: string;
  till: string;
  duration: string;
}
