export interface Data {
    items:           StackOverflowItem[];
    has_more:        boolean;
    quota_max:       number;
    quota_remaining: number;
}

export interface StackOverflowItem {
    tags:                string[];
    owner:               Owner;
    is_answered:         boolean;
    view_count:          number;
    accepted_answer_id?: number;
    answer_count:        number;
    score:               number;
    last_activity_date:  number;
    creation_date:       number;
    last_edit_date?:     number;
    question_id:         number;
    content_license:     ContentLicense;
    link:                string;
    title:               string;
}

export enum ContentLicense {
    CcBySa30 = "CC BY-SA 3.0",
    CcBySa40 = "CC BY-SA 4.0",
}

export interface Owner {
    reputation:    number;
    user_id:       number;
    user_type:     UserType;
    accept_rate:   number;
    profile_image: string;
    display_name:  DisplayName;
    link:          string;
}

export enum DisplayName {
    Isherwood = "isherwood",
}

export enum UserType {
    Registered = "registered",
}
