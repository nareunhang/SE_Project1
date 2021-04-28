@extends('layout')

@section('content')
        <div class="category">
            <ul>
                <a href="1"><li>예약상품</li></a>
                <a href="2"><li>PlayStation5</li></a>
                <a href="3"><li>PlayStation4</li></a>
                <a href="4"><li>PlayStationVR</li></a>
                <a href="5"><li>PlayStation3</li></a>
                <a href="6"><li>닌텐도Switch</li></a>
                <a href="7"><li>닌텐도3DS</li></a>
                <a href="8"><li>할인상품</li></a>
                <a href="9"><li>기타상품</li></a>
            </ul>
        </div>
    </header>

        <form autocomplete="off" action="login" accept-charset="utf-8" class="log_in" name="log_in" method="post">
            @csrf
            <input type="email" id="email" name="email" placeholder="아이디" onfocus="this.placeholder=''" onblur="this.placeholder='아이디'">
            <input type="password" id="pw" name="pw" placeholder="비밀번호" onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호'">
            <button type="submit" value="submit">로그인</button>
            <ul id="addition">
                <li><a href="sign_up">회원가입</a></li>
                <li><a href="find_pw">비밀번호 찾기</a></li>
            </ul>
        </form>


@endsection
