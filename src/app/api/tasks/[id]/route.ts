import { TaskModel } from "@/models/task";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  try {
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json({
        status: 404,
        message: "タスクが取得できませんでした",
      });
    }

    return NextResponse.json({ message: "タスク取得成功", task });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "タスク取得失敗", status: 500 });
  }
};

export const dynamic = "force-dynamic";
