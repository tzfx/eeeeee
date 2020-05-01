export class PriorityOptions {
    static Metatype: PriorityList = {
        A: 13,
        B: 11,
        C: 9,
        D: 4,
        E: 1
    };
    static Attributes: PriorityList = {
        A: 24,
        B: 16,
        C: 12,
        D: 8,
        E: 2
    };
    static Skills: PriorityList = {
        A: 32,
        B: 24,
        C: 20,
        D: 16,
        E: 10
    };
    static Magic: PriorityList = {
        A: {
            Full: 4,
            Aspected: 5,
            MysticAdept: 4,
            Adept: 4,
            Technomancer: 4
        },
        B: {
            Full: 3,
            Aspected: 4,
            MysticAdept: 3,
            Adept: 3,
            Technomancer: 3
        },
        C: {
            Full: 2,
            Aspected: 3,
            MysticAdept: 2,
            Adept: 2,
            Technomancer: 2
        },
        D: {
            Full: 1,
            Aspected: 2,
            MysticAdept: 1,
            Adept: 1,
            Technomancer: 1
        },
        E: {
            Full: 0,
            Aspected: 0,
            MysticAdept: 0,
            Adept: 0,
            Technomancer: 0
        }
    };
    static Resources: PriorityList = {
        A: 450000,
        B: 275000,
        C: 150000,
        D: 50000,
        E: 8000
    };
}

export interface PriorityList {
    A: number | MagicPriorities;
    B: number | MagicPriorities;
    C: number | MagicPriorities;
    D: number | MagicPriorities;
    E: number | MagicPriorities;
}

export interface MagicPriorities {
    Full: number;
    Aspected: number;
    MysticAdept: number;
    Adept: number;
    Technomancer: number;
};
