export = network;

declare namespace network {

    interface InvestorProfile {
        id: number;
        name: string;
        balance: number;
        completed: number;
        broke: number;
        badges: string[];
        firm: number;
        firm_role: string;
        networth: number;
        rank: number;
    }

    interface FirmProfile {
        id: number;
        name: string;
        balance: number;
        size: number;
        execs: number;
        tax: number;
        rank: number;
        private: boolean;
        last_payout: number;
    }

    type InvestMentHistory = InvestMentHistoryObject[];
    interface InvestMentHistoryObject {
        id: number;
        post: string;
        upvotes: number;
        comment: string;
        name: string;
        amount: number;
        time: number;
        done: boolean;
        response: string;
        final_upvotes: number;
        success: boolean;
        profit: number;
    }

    type FirmMemberList = FirmMemberListObject[];
    interface FirmMemberListObject {
        id: number;
        name: string;
        balance: number;
        completed: number;
        broke: number;
        badges: string[];
        firm: number;
        firm_role: string;
        networth: number;
    }

}
